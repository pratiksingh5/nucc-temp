import React, { useState } from "react";
import GlobalModal from "../common/Modals/GlobalModal";
import { ProfilePageSchema } from "@/validation/schemas/ProfileSchema";
import * as Yup from "yup";
import ProfileForm from "./ProfileForm";
import useProfileStore from "@/stores/ProfileStore";

export const inputTypes: Record<string, string> = {
	string: "text",
	email: "email",
	number: "number",
};

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	type: string;
}

type FormValues = {
	[key: string]: string | number | FileList | undefined;
};

const ProfilePageFormModal = ({ open, setOpen, type }: Props) => {
	const schema: Yup.ObjectSchema<any> = ProfilePageSchema[type];
	const profileStore = useProfileStore();
	console.log("schema: ", schema.describe());
	const described = schema.describe();

	// Get the initial values for the form from the schema
	const initialValues = profileStore?.[type]
		? profileStore?.[type]
		: Object.keys(schema.fields).reduce((accumulator: any, currentValue) => {
				accumulator[currentValue] = schema.fields[currentValue].default();
				return accumulator;
		  }, {});
	const [formValues, setFormValues] = useState<FormValues>(initialValues);
	const [formErrors, setFormErrors] = useState<FormValues>({});

	const handleChange = async (event: any) => {
		const { name, value, type } = event.target;
		const newValue = type === "file" ? event.target?.files : value;
		const newValues = { ...formValues, [name]: newValue };
		if(name){
		setFormValues(newValues);
		}
		try {
			await schema.validate(newValues, {});
			setFormErrors((prev) => ({ ...prev, [name]: "" }));
		} catch (err: any) {
			const errors: any = { ...formErrors };

			err.inner.forEach((e: any) => {
				if (e.path === name) {
					errors[e.path] = e.message;
				}
			});
			setFormErrors(errors);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await schema.validate(formValues, { abortEarly: false });
			console.log("Form data is valid:", formValues);
			// submit form data to server or do other actions here
		} catch (err: any) {
			console.error("Form validation failed:", err);
			const errors: any = { ...formErrors };
			err.inner.forEach((e: any) => {
				errors[e.path] = e.message;
			});
			setFormErrors(errors);
		}
	};

	const onClose = () => {};
	return (
		<GlobalModal
			{...{ open, setOpen, onClose }}
			actions={
				<>
					<button
						onClick={handleSubmit as any}
						type='submit'
						className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto'>
						Save
					</button>
				</>
			}>
			<ProfileForm
				{...{ described, formErrors, formValues, handleChange, handleSubmit }}
			/>
		</GlobalModal>
	);
};

export default ProfilePageFormModal;
