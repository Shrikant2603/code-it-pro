import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="p-4 border-2 rounded-xl">
      <MutatingDots
            height={100}
            width={100}
            color="#0097d7"
            secondaryColor="#0097d7"
            radius={12.5}
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            visible={true}
        />
    </div>
  )
};

export default Loading;
