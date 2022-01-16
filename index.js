// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}.`;
};

const wrapAdjective = (visFlair='*') => {
    return (adj='special') => {
        return `You are ${visFlair}${adj}${visFlair}!`;
    };
};

const Calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    multiply: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        return a / b;
    }
}

const actionApplyer = (int, array) => {
    let start = int;

    for (const elem of array) {
        start = elem(start);
    }

    return start;
}