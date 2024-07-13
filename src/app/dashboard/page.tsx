import React from "react";
import { Icon } from "../components";

const page = () => {
    return (
        <div className="grid grid-cols-12">
            <aside
                id="sidebar"
                className="col-span-2 bg-white text-black h-screen border-r-[1px] border-#5B5B5F"
            >
                <div className="p-2 border-b-[1px]">Ship Happens</div>
                <div
                    id="menucontainer"
                    className="flex flex-col mx-2 my-4 gap-2"
                >
                    <button
                        id="newchat"
                        className="flex flex-row py-2 bg-[#625AD7] rounded-lg text-white"
                    >
                        <Icon
                            label="create"
                            style={{
                                height: "16px",
                                width: "16px",
                                color: "#FFFFFF",
                            }}
                        />
                        New Chat
                    </button>
                    <div
                        id="searchbar"
                        className="border-[#EDEDED] border-2 rounded-lg flex flex-row bg-[#F1F1F1] py-1"
                    >
                        <Icon label="search" style={{ height: "16px" }} />
                        Search
                    </div>
                    <button className="flex flex-row justify-between py-1">
                        <div className="flex flex-row">
                            <Icon
                                label="folder"
                                style={{
                                    height: "16px",
                                    width: "16px",
                                    color: "#5B5B5F",
                                }}
                            />
                            Folder
                        </div>
                        <>8</>
                    </button>
                    <button className="flex flex-row justify-start py-1">
                        <Icon
                            label="favorite"
                            style={{
                                height: "16px",
                                width: "16px",
                                color: "#5B5B5F",
                            }}
                        />
                        Favorite
                    </button>
                    <button className="flex flex-row justify-start py-1">
                        <Icon
                            label="archive"
                            style={{
                                height: "16px",
                                width: "16px",
                                color: "#5B5B5F",
                            }}
                        />
                        Archive
                    </button>
                    <div>
                        <h3>Today</h3>
                        <p></p>
                    </div>
                </div>
            </aside>
            <div
                id="chatwrapper"
                className="col-span-10 bg-[#F1F1F1] w-full flex flex-col items-center"
            >
                <div
                    id="wrappertitle"
                    className="p-2 border-b-[1px] border-#5B5B5F bg-white text-black w-full"
                >
                    Ship Happens
                </div>
                <div className="flex flex-col justify-center w-[480px]">
                    <div>
                        <div
                            id="promptbar"
                            className="flex flex-row gap-2 absolute bottom-12 w-[480px]"
                        >
                            <div className="w-full bg-white text-[#5B5B5F] px-4 py-2 rounded-md">
                                Enter a prompt here...
                            </div>
                            <button className="bg-[#625AD7] text-white rounded-md h-10 w-10 flex justify-center">
                                <Icon
                                    label="send"
                                    style={{ height: "16px", width: "16px" }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
