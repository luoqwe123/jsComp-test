

export function useOffset(lastMessage){
    if(!lastMessage) return 0;
    return lastMessage.offsetTop + lastMessage.offsetHeight;
}