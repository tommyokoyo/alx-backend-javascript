interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: string;
    readonly location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstNameInitial = firstName.charAt(0);
    return `${firstNameInitial}. ${lastName}`;
}

//Interface for the StudentClass constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

//interface for the StudentClass
interface StudentClass {
    workOnHomework(): string;
    displayName(): string
}

class Student implements StudentClass {
    constructor(private firstName: string, private lastName: string) {
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName
    }
}