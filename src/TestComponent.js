import React, { useEffect } from "react";

const TestComponent = () => {
  useEffect(() => {
    console.log("component did mount");

    return () => {
      console.log("component did unmount");
    };
  }, []);

  return <div>Test Component</div>;
};

export default TestComponent;
