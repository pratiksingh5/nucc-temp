interface CourseFilter {
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
    checked: boolean;
  }[];
}

const courseFilters: CourseFilter[] = [
  {
    id: "subject",
    name: "Subject",
    options: [
      { value: "Commerce", label: "Commerce", checked: false },
      { value: "IT", label: "IT", checked: false },
      { value: "Science", label: "Science", checked: true },
    ],
  },
  {
    id: "skills",
    name: "Skills",
    options: [
      {
        value: "Account Management",
        label: "Account Management",
        checked: false,
      },
      { value: "Accounting", label: "Accounting", checked: false },
      { value: "Block Chain", label: "Block Chain", checked: true },
      {
        value: "Amazon Web Services",
        label: "Amazon Web Services",
        checked: false,
      },
      {
        value: "Digital Marketing",
        label: "Digital Marketing",
        checked: false,
      },
    ],
  },
  {
    id: "educator",
    name: "Educator",
    options: [
      { value: "Board Infinity", label: "Board Infinity", checked: false },
      { value: "Udemy", label: "Udemy", checked: false },
      { value: "Coursera", label: "Coursera", checked: false },
    ],
  },
];

export default courseFilters;
