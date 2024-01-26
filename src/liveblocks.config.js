import { LiveList, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
  
const client = createClient({
  publicApiKey: "pk_dev_DxbrZKlnQSeT1hfaOK2uGjdzJw-oqO_3R6jLesqVprlIcKn_KNicpLhxbwMdM1W-"
});

// Optionally, Storage represents the shared document that persists in the
// Room, even after all users leave. Fields under Storage typically are
// LiveList, LiveMap, LiveObject instances, for which updates are
// automatically persisted and synced to all connected clients.
type Storage = {
  guests: LiveList<{ text: string}>;
};

export const {
  suspense: { 
      RoomProvider,
      useStorage,
      useMutation
   },
} = createRoomContext(client);
