import { Client, Account, Databases, Storage, Avatars } from 'appwrite';


export const appwriteConfig = {
    projectID: import .meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    usersCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postsCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID, 
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVE_COLLECTION_ID,
}

export const client = new Client()

client
    .setEndpoint(appwriteConfig.url)
    .setProject(appwriteConfig.projectID);

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)
