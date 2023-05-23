import React from "react";

let albumCover;
// tarkastetaan kansikuva albumin nimen perusteella ja palautetaan se
    export const CheckImage = (result) => {

        switch (result.album) {
            case "Born to Die": 
                albumCover = "borntodie.png";
                break;
            case "Born to Die: The Paradise Edition": 
                albumCover = "paradise.png";
                break;
            case "Ultraviolence": 
                albumCover = "ultraviolence.png";
                break;
            case "Honeymoon": 
                albumCover = "honeymoon.png";
                break;
            case "Lust for Life": 
                albumCover = "lustforlife.png";
                break;
            case "Norman Fucking Rockwell": 
                albumCover = "nfr.png";
                break;
            case "Chemtrails over the Country Club": 
                albumCover = "chemtrails.png";
                break;
            case "Blue Banisters": 
                albumCover = "bluebanisters.png";
                break;
            case "Did You Know That There's a Tunnel Under Ocean Blvd": 
                albumCover = "oceanblvd.png";
                break;                                                     
            default: albumCover = "placeholder.png";
        }

        return (
            <img src={albumCover} alt="Album cover"/>    
        )
    }