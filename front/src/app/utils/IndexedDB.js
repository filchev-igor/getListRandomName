import { openDB } from 'idb';

const getIndexedDB = () => openDB('getListRandomName', 1, {
  upgrade(db) {
    db.createObjectStore('siteSettings');
  },
});

export const addDataIntoIndexedDB = async ({ value, key }) => {
  const db = await getIndexedDB();

  const store = db
    .transaction(['siteSettings'], 'readwrite')
    .objectStore('siteSettings');

  try {
    await store.add(value, key);
  } catch (err) {
    if (err.setting === 'ConstraintError') {
      console.error('mistake!');
    }
  }
};

export const updateDataIntoIndexedDB = async ({ value, key }) => {
  const db = await getIndexedDB();

  const store = db
    .transaction(['siteSettings'], 'readwrite')
    .objectStore('siteSettings');

  try {
    await store.put(value, key);
  } catch (e) {
    console.log(e);
  }

  return store.get(key);
};

export const getDataIntoIndexedDB = async ({ initialValue, key }) => {
  const db = await getIndexedDB();

  const store = db
    .transaction(['siteSettings'], 'readonly')
    .objectStore('siteSettings');

  const result = await store.get(key);

  if (result === undefined) {
    try {
      await addDataIntoIndexedDB({
        value: initialValue,
        key,
      });
    } catch (err) {
      console.log(`Initialization error ${result}`);
    }

    return true;
  }

  return result;
};
