
import { FetchExmaple } from '@/services/exampleService';
import { create } from 'zustand';

interface NewsState {
    list: Array<any>;
    getList: () => void;
}

const useNewsStore = create<NewsState>((set, get) => ({
    list: [],
    getList: async () => {
        let res = await FetchExmaple();

        if (res?.status) {
            set(() => ({ list: res.data }));
        }
    },
}));

export default useNewsStore;