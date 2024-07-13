import React, { FC } from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { IconType } from "../types";
import {
    faFolder,
    faMoon,
    faPaperPlane,
    faStar,
    faSun,
    faThumbsDown,
    faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
    faAdd,
    faArchive,
    faArrowRotateRight,
    faDownload,
    faMagnifyingGlass,
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconProps = {
    label: IconType;
    style?: {};
};

const iconMapping: { [key in IconType]: IconDefinition } = {
    favorite: faStar,
    folder: faFolder,
    archive: faArchive,
    daymode: faSun,
    nightmode: faMoon,
    search: faMagnifyingGlass,
    send: faPaperPlane,
    regenerate: faArrowRotateRight,
    download: faDownload,
    like: faThumbsUp,
    dislike: faThumbsDown,
    edit: faPencil,
    create: faAdd,
};

export const Icon: FC<IconProps> = ({ label, style }) => {
    const icon = iconMapping[label];

    return (
        <FontAwesomeIcon
            className="flex self-center mx-2"
            icon={icon}
            style={style}
        />
    );
};
