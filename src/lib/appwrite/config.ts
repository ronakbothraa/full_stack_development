import { Client, Account, Databases, Storage, Avatars } from 'appwrite';


export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_URL,
    projectId: import .meta.env.VITE_APPWRITE_PROJECT_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    usersCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postsCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID, 
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVE_COLLECTION_ID,
}

export const client = new Client()
export const databases = new Databases(client)

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)
