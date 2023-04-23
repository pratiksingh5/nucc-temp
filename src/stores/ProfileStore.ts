import { FetchExmaple } from "@/services/exampleService";
import { Profile } from "@/validation/schemas/ProfileSchema";
import { create } from "zustand";

interface ProfileState {
  Profile: Profile;
}

const useProfileStore = create<ProfileState>((set, get) => ({
  Profile: {
    aboutMe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    email: "admin@gmail.com",
    firstName: "admin@gmail.com",
    lastName: "+91854763210",
    phone: 91854763210,
  },
}));

export default useProfileStore;
