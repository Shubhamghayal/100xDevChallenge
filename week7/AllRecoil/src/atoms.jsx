import { atom, selector } from "recoil"

export const mynetwork=atom({
    key:"mynetwork",
    default:102,
});
export const jobs=atom({
    key:"jobs",
    default:0,
});
export const messaging=atom({
    key:"messaging",
    default:12,
});
export const notification=atom({
    key:"notification",
    default:0,
});

export const totalsumselector=selector({
    key:'totalsumselector',
    get:({get})=>{
        const mynetworkValue=get(mynetwork) 
        const jobsValue=get(jobs) 
        const messagingValue=get(messaging) 
        const notificationValue=get(notification) 
        return mynetworkValue +jobsValue + messagingValue+ notificationValue
    }
})