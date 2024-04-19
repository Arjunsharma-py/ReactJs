import React, { useEffect, useRef } from "react";
import "@stream-io/video-react-sdk/dist/css/styles.css";

import {
  ParticipantView,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQXNhampfVmVudHJlc3MiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0FzYWpqX1ZlbnRyZXNzIiwiaWF0IjoxNzEzMTYzNDU2LCJleHAiOjE3MTM3NjgyNjF9.Le2L7nqjYS08sM1NGdzB7OqZInoY-eET5AYbIWX8IoQ";
const userId = "Asajj_Ventress";
const callId = "vqPbVBrZdgoG";

const user = {
  id: userId,
  name: "Oliver",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("livestream", callId);
call.join({ create: true });

function LiveStream() {
  return (
    <div>
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <MyLivestreamUI client={client} />
        </StreamCall>
      </StreamVideo>
    </div>
  );
}

export default LiveStream;

export const MyLivestreamUI = ({ client }) => {
  const call = useCall();
  const { useIsCallLive, useLocalParticipant, useParticipantCount } =
    useCallStateHooks();
  const totalParticipants = useParticipantCount();
  const localParticipant = useLocalParticipant();
  const isCallLive = useIsCallLive();

  const localStreamRef = useRef(null);

  useEffect(() => {
    if (localParticipant && localParticipant.stream) {
      localStreamRef.current = localParticipant.stream;
    }
  }, [localParticipant]);

  const stopLiveStream = () => {
    call?.stopLive();
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      call?.camera.disable();
    }
    // You cannot directly control camera permissions, so you can only guide the user to revoke it manually.
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <div
        style={{
          alignSelf: "flex-start",
          color: "white",
          backgroundColor: "blue",
          borderRadius: "8px",
          padding: "4px-6px",
        }}
      >
        Live: {totalParticipants}
      </div>
      <div style={{ flex: 1 }}>
        {localParticipant && <ParticipantView participant={localParticipant} />}
      </div>
      <div style={{ alignSelf: "center" }}>
        {isCallLive ? (
          <button onClick={stopLiveStream}>Stop LiveStream</button>
        ) : (
          <button onClick={() => call?.goLive()}>Start LiveStream</button>
        )}
      </div>
    </div>
  );
};
