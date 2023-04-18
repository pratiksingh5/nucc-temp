import * as Yup from "yup";

const profileSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("First name is required")
        .label("First Name")
        .default(""),
    lastName: Yup.string()
        .required("Last name is required")
        .label("Last Name")
        .default(""),
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required")
        .label("Email")
        .default(""),
    phone: Yup.number().required().label("Phone").default(null),
    aboutMe: Yup.string()
        .required()
        .label("About Me")
        .default("")
        .meta({ type: "textArea" }),
});
export interface Profile extends Yup.InferType<typeof profileSchema> { }

const addressSchema = Yup.object().shape({
    "house/flatNo.": Yup.string()
        .required()
        .label("House/flat Number")
        .default(""),
    line1: Yup.string().required().label("Line1").default(""),
    line2: Yup.string().required().label("Line2").default(""),
    city: Yup.string().required().label("City").default(""),
    state: Yup.string().required().label("State").default(""),
    country: Yup.string().required().label("country").default(""),
    pincode: Yup.number().required().label("pincode").default(null),
});
interface Address extends Yup.InferType<typeof addressSchema> { }

const eduDetailSchema = Yup.object().shape({
    courseName: Yup.string().required().label("Course Name").default(""),
    institute: Yup.string().required().label("Institute").default(""),
    university: Yup.string().required().label("University").default(""),
    yearOfPassing: Yup.number().required().label("Year of Passing").default(null),
    cgpa: Yup.number().required().label("cgpa").default(null),
});
interface EduDetail extends Yup.InferType<typeof eduDetailSchema> { }

const certSchema = Yup.object().shape({
    certificateID: Yup.string().required().label("Certification").default(""),
    certificateName: Yup.string()
        .required()
        .label("Certificate Name")
        .default(""),
    URL: Yup.string().required().label("URL").default(""),
    certificatePic: Yup.string().required().label("Certificate Pic").default(""),
});
interface Certificate extends Yup.InferType<typeof certSchema> { }

// const resumeSchema = Yup.object().shape({
//     resumeURL: Yup.string().required().label("Resume URL").default(""),
// });
// interface Resume extends Yup.InferType<typeof resumeSchema> { }

const resumeSchema = Yup.object().shape({
    resume: Yup.mixed().required().label("Resume")
  });
  
interface Resume extends Yup.InferType<typeof resumeSchema> {}

const projectSchema = Yup.object().shape({
    projectName: Yup.string().required().label("Project Name").default(""),
    description: Yup.string().required().label("Description").default(""),
    organisaiton: Yup.string().required().label("Organisaiton").default(""),
    domain: Yup.string().required().label("Domain").default(""),
    teamSize: Yup.number().required().label("Team Size").default(null),
    Duration: Yup.string().required().label("Duration").default(""),
});
interface Projects extends Yup.InferType<typeof projectSchema> { }

interface FormSchemas {
    Profile: Yup.ObjectSchema<Profile>;
    Address: Yup.ObjectSchema<Address>;
    "Educational Details": Yup.ObjectSchema<EduDetail>;
    Certificate: Yup.ObjectSchema<Certificate>;
    Resume: Yup.ObjectSchema<Resume>;
    Projects: Yup.ObjectSchema<Projects>;
}

// Define the form schema using Yup
export const ProfilePageSchema: FormSchemas = {
    Profile: profileSchema,
    Address: addressSchema,
    "Educational Details": eduDetailSchema,
    Certificate: certSchema,
    Resume: resumeSchema,
    Projects: projectSchema,
};