import { motion } from "framer-motion";
import { useEffect, useState  } from 'react';

const PageColor = ({pageHeight, pageWidth}) => {
    const [colorFirstStateSize, setColorFirstStateSize] = useState({
    })
    const [colorSecondStateSize, setColorSecondStateSize] = useState({
    })
    const [colorThirdStateSize, setColorThirdStateSize] = useState({
    })
    const [colorFourthStateSize, setColorFourthStateSize] = useState({
    })
    const [pathVariants, setPathVariants] = useState({
    initial: {
        x: 0,
        // d:["M0 0C0 0 388.2080894800484 218.08684522370012 396.5719830713422 394.5991837968561C404.9358766626361 571.1098125755743 372.9802067714631 582.9886094316809 304.99003143893594 606.5111064087063C236.9998561064087 630.0293288996373 0 707 0 707V0Z"]
    },
    animate: {
        x: 0,
        d: [
            "M1 1870.5L0.999934 232.5C0.999934 232.5 -2.93796 17.1476 208.885 0.364863C420.709 -16.4179 511.796 551.218 812.402 578.607C1113.01 605.996 921.347 1455.41 660.109 1581.15C398.871 1706.89 591.444 2084.24 447.715 2065.71C303.986 2047.17 1 1870.5 1 1870.5Z",
            "M347 184.883C347 262.786 192.459 545.84 205.996 325.939C-151.593 256.958 64.9907 262.786 64.9907 184.883C166.515 -119.661 128.121 43.8272 205.996 43.8272C283.87 43.8272 564.43 215.488 347 184.883Z","M296 148C296 229.738 229.738 296 148 296C66.2618 296 -1.20541e-05 229.738 -1.20541e-05 148C-1.20541e-05 66.2619 66.2618 0 148 0C229.738 0 296 66.2619 296 148Z"
            ],
        transition: {duration:1}}
    })
    const svgVariants = {
    initial: {

    },
    animate: {
        transition: {duration:2}}
    }
    
// const pathVariants = {
//     initial: {
//         x: 0,
//         d:["M0 0C0 0 388.2080894800484 218.08684522370012 396.5719830713422 394.5991837968561C404.9358766626361 571.1098125755743 372.9802067714631 582.9886094316809 304.99003143893594 606.5111064087063C236.9998561064087 630.0293288996373 0 707 0 707V0Z"]
//     },
//     animate: {
//         x: 0,
//         // d: [
//         //     "M1 1870.5L0.999934 232.5C0.999934 232.5 -2.93796 17.1476 208.885 0.364863C420.709 -16.4179 511.796 551.218 812.402 578.607C1113.01 605.996 921.347 1455.41 660.109 1581.15C398.871 1706.89 591.444 2084.24 447.715 2065.71C303.986 2047.17 1 1870.5 1 1870.5Z",
//         //     "M347 184.883C347 262.786 192.459 545.84 205.996 325.939C-151.593 256.958 64.9907 262.786 64.9907 184.883C166.515 -119.661 128.121 43.8272 205.996 43.8272C283.87 43.8272 564.43 215.488 347 184.883Z","M296 148C296 229.738 229.738 296 148 296C66.2618 296 -1.20541e-05 229.738 -1.20541e-05 148C-1.20541e-05 66.2619 66.2618 0 148 0C229.738 0 296 66.2619 296 148Z"
//         //     ],
//         transition: {duration:2}}
//     }
    const pathListFirstState = [{x:0,y:0},{x:0,y:0},{x:1012.77, y:510.206}, {x:1034.59, y:923.15}, {x:1056.41, y:1336.09}, {x:973.043, y:1363.88}, {x:795.668, y:1418.91},{x:618.293,y:1473.93}, {x:0, y:1654}, {x:0, y:1654}]
    const pathListSecondState = [{x:0,y:0},{x:0,y:0},{x:1012.77, y:510.206}, {x:1034.59, y:923.15}, {x:1056.41, y:1336.09}, {x:973.043, y:1363.88}, {x:795.668, y:1418.91},{x:618.293,y:1473.93}, {x:0, y:1654}, {x:0, y:1654}]
    const pathListThirdState = [{x:0,y:0},{x:0,y:0},{x:1012.77, y:510.206}, {x:1034.59, y:923.15}, {x:1056.41, y:1336.09}, {x:973.043, y:1363.88}, {x:795.668, y:1418.91},{x:618.293,y:1473.93}, {x:0, y:1654}, {x:0, y:1654}]
    const pathListFifthState = [{x:0,y:0},{x:0,y:0},{x:1012.77, y:510.206}, {x:1034.59, y:923.15}, {x:1056.41, y:1336.09}, {x:973.043, y:1363.88}, {x:795.668, y:1418.91},{x:618.293,y:1473.93}, {x:0, y:1654}, {x:0, y:1654}]
    const initialWidthFirst = 2504
    const initialHeightFirst = 1654
    const initialWidthSecond = 966
    const initialHeightSecond = 764
    const initialWidthThird = 428
    const initialHeightThird = 408
    const initialWidthFourth = 296
    const initialHeightFourth = 296
    useEffect(() => {
        console.log(colorFirstStateSize)
        colorFirstStateSize.pathOne && setPathVariants({...pathVariants,initial:{x:0,d:[`M${colorFirstStateSize.pathOne.x} ${colorFirstStateSize.pathOne.y}C${colorFirstStateSize.pathTwo.x} ${colorFirstStateSize.pathTwo.y} ${colorFirstStateSize.pathThree.x} ${colorFirstStateSize.pathThree.y} ${colorFirstStateSize.pathFour.x} ${colorFirstStateSize.pathFour.y}C${colorFirstStateSize.pathFive.x} ${colorFirstStateSize.pathFive.y} ${colorFirstStateSize.pathSix.x} ${colorFirstStateSize.pathSix.y} ${colorFirstStateSize.pathSeven.x} ${colorFirstStateSize.pathSeven.y}C${colorFirstStateSize.pathEight.x} ${colorFirstStateSize.pathEight.y} ${colorFirstStateSize.pathNine.x} ${colorFirstStateSize.pathNine.y} ${colorFirstStateSize.pathTen.x} ${colorFirstStateSize.pathTen.y}V0Z`]}})
    },[colorFirstStateSize])

    useEffect(() => {
        console.log('hey')

        // `M0 0C0 0 1012.77 510.206 1034.59 923.15C1056.41 1336.09 973.043 1363.88 795.668 1418.91C618.293 1473.93 0 1654 0 1654V0Z`
        console.log(pageWidth / (initialWidthFirst/pathListFirstState[2].x),pageHeight / (initialHeightFirst/pathListFirstState[2].y))
        setColorFirstStateSize({
            pathOne: {x:pageWidth / (initialWidthFirst/pathListFirstState[0].x),y: pageHeight / (initialHeightFirst/pathListFirstState[0].y)}, 
            pathTwo: {x:pageWidth / (initialWidthFirst/pathListFirstState[1].x),y: pageHeight / (initialHeightFirst/pathListFirstState[1].y)}, 
            pathThree: {x:pageWidth / (initialWidthFirst/pathListFirstState[2].x),y: pageHeight / (initialHeightFirst/pathListFirstState[2].y)},
            pathFour: {x:pageWidth / (initialWidthFirst/pathListFirstState[3].x),y: pageHeight / (initialHeightFirst/pathListFirstState[3].y)},
            pathFive: {x:pageWidth / (initialWidthFirst/pathListFirstState[4].x),y: pageHeight / (initialHeightFirst/pathListFirstState[4].y)},
            pathSix: {x:pageWidth / (initialWidthFirst/pathListFirstState[5].x),y: pageHeight / (initialHeightFirst/pathListFirstState[5].y)},
            pathSeven: {x:pageWidth / (initialWidthFirst/pathListFirstState[6].x),y: pageHeight / (initialHeightFirst/pathListFirstState[6].y)},
            pathEight: {x:pageWidth / (initialWidthFirst/pathListFirstState[7].x),y: pageHeight / (initialHeightFirst/pathListFirstState[7].y)},
            pathNine: {x:pageWidth / (initialWidthFirst/pathListFirstState[8].x),y: pageHeight / (initialHeightFirst/pathListFirstState[8].y)},
            pathTen: {x:pageWidth / (initialWidthFirst/pathListFirstState[9].x),y: pageHeight / (initialHeightFirst/pathListFirstState[9].y)}})
        // {aboutPage:{}}
        // setPageColorSizes({...pageColorSizes, })
    },[pageHeight, pageWidth])

    return (
        <motion.svg
        viewBox={`0 0 ${pageWidth} ${pageHeight}`}
        preserveAspectRatio="none"
        fill="#235CEF" fill-opacity="0.10"
            style={{
                zIndex:0,
                borderRadius: 0,
                position: "absolute",
            }}
            variants={svgVariants}
            initial="initial"
            animate="animate"
        >
            <motion.path
                d={colorFirstStateSize.pathOne && `M${colorFirstStateSize.pathOne.x} ${colorFirstStateSize.pathOne.y}C${colorFirstStateSize.pathTwo.x} ${colorFirstStateSize.pathTwo.y} ${colorFirstStateSize.pathThree.x} ${colorFirstStateSize.pathThree.y} ${colorFirstStateSize.pathFour.x} ${colorFirstStateSize.pathFour.y}C${colorFirstStateSize.pathFive.x} ${colorFirstStateSize.pathFive.y} ${colorFirstStateSize.pathSix.x} ${colorFirstStateSize.pathSix.y} ${colorFirstStateSize.pathSeven.x} ${colorFirstStateSize.pathSeven.y}C${colorFirstStateSize.pathEight.x} ${colorFirstStateSize.pathEight.y} ${colorFirstStateSize.pathNine.x} ${colorFirstStateSize.pathNine.y} ${colorFirstStateSize.pathTen.x} ${colorFirstStateSize.pathTen.y}V0Z`}
                variants={pathVariants}
                initial="initial"
                animate="animate"
                // animate={{
                // }}
                // transition={{
                //     repeat: false,
                //     ease: "easeInOut",
                //     duration: 5,
                // }}
            />
        </motion.svg>
    );
}

export default PageColor;