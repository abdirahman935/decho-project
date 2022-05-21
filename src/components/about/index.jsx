import React from "react";

//images
import Abdirahman from '../../assets/images/Abdirahman_profil.png';
import Fuad from '../../assets/images/Fouad_profil.png';
import Mahram from '../../assets/images/Mahram_profil.png';
import Markus from '../../assets/images/Markus_profil.png';
import Petter from '../../assets/images/Petter_profil.png';
import Salem from '../../assets/images/Salem_profil.png';

//Wrappers
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";


const teams = [
    {
        name: "Abdirahman Ali",
        photo: Abdirahman,
        projectTitle: 'Project Leader',
        title: "Software Architect"

    },

    {
        name: "Petter Tveit",
        photo: Petter,
        projectTitle: 'Documentation Lead',
        title: " Software Architect"
    },

    {
        name: "Fouad Irkayek",
        photo: Fuad,
        projectTitle: 'Risk Lead',
        title: ''
    },

    {
        name: "Mahram Safdari",
        photo: Mahram,
        projectTitle: 'Test Lead',
        title: 'Software Architect'
    },
    {
        name: "Markus Danielsen",
        photo: Markus,
        projectTitle: 'Design & Requirement Lead',
        title: ''
    },


    {
        name: "Salem Rezaie",
        photo: Salem,
        projectTitle: 'Scrum Master',
        title: "Software Architect"

    }
]

const About = () => {
    return (
        <div className={`app__wrapper`}>
            <div className="app__container text-center  py-6 px-4  ">
                <h2 className="text-2xl font-semibold">Our Team</h2>

                <div className="grid__Container">
                    {teams.map((team, index) => (
                        <div className="about__larger 	mr-auto ml-auto  mt-6 duration-700 cursor-pointer mb-6" key={index}>
                            <img
                                src={team.photo}
                                alt={team.name}
                                className="w-56 h-56 object-cover rounded-lg "
                            />

                            <div className="mt-6 ">
                                <h3 className="mb-4 font-semibold">{team.name}</h3>

                                <p className="flex flex-col py-2 px-6">
                                    <>
                                        <span className="text-sm">{team.projectTitle}</span>
                                        {team.title === '' ? null : (
                                            <span className="text-xs mt-4 ">{team.title}</span>
                                        )}
                                    </>

                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default AppWrap(MotionWrap(About), 'team', "app__lightGrayBg overflow-hidden");