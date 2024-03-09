const dayTextTemplate = `I am recording a video of myself practicing typing for 100 days to improve my typing skills.
This is day DAY_NUMBER of 100.
Enjoy watching me practice typing and listening to the sounds of my keyboard.
Thank you very much!`;

const getDayText = (dayNumber) => {
    const dayText = dayTextTemplate.replace("DAY_NUMBER", dayNumber);
    return dayText;
}

export default getDayText;