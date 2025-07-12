import React from "react";

const Header = ({currUserData, setUser}) => {
  const logout = () => {
    const loggedInUser = {role: "anonymous", data: null};
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setUser("anonymous");
    // localStorage.setItem("currUserData", null);
    // window.location.reload();
  };

  // const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // const currUserData = loggedInUser.data;

  return (
    <div className="w-full flex justify-between">
      <div>
        <h2 className="text-2xl">
          Hello <br />
          <span className="text-4xl font-bold"> {currUserData.firstName} 👋 </span>
        </h2>
      </div>
      <div className="flex items-end">
        <button className="bg-red-500 hover:bg-red-700 px-4 py-2 text-lg rounded-sm cursor-pointer" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
