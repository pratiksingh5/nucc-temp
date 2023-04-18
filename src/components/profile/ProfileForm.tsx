import React from "react";
import { SchemaObjectDescription } from "yup";
import { inputTypes } from "./ProfilePageFormModal";
import Dropzone from 'react-dropzone'

type Props = {
	handleChange?: (event: any) => Promise<void>;
	handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<any>;
	described: SchemaObjectDescription;
	formValues: any;
	formErrors?: any;
	readOnly?: boolean;
};

const ProfileForm = ({
	handleChange,
	handleSubmit,
	described,
	formValues,
	formErrors,
	readOnly,
}: Props) => {

	const handleFileUpload = async (acceptedFiles: File[]) => {
		// Handle file upload logic here
		console.log(acceptedFiles);
		const name = "resume"; 
		const file = acceptedFiles[0];
		const event = { target: { name, value: file } };
		await handleChange(event);
	  };

	  return (
		<form onSubmit={handleSubmit}>
		  <div className="space-y-1">
			{Object.keys(described.fields).map((fieldName) => {
			 
			  const field: any = described.fields[fieldName];
			  console.log(field, described)
	
			  const label = field.label;
			  console.log("formValues[fieldName]: ", formValues[fieldName]);
	
			  const Field: any = field?.meta?.type
				? `${field?.meta?.type}`
				: `input`;
	
			  const FieldProps = {
				type: inputTypes[field.type],
				name: fieldName,
				id: fieldName,
				value: formValues[fieldName] as string,
				onChange: handleChange,
				disabled: readOnly ? true : false,
				className: `bg-[#F4F4F4] block w-full rounded-md border-0 py-1.5 p-1 text-gray-900 shadow-sm ${
				  !readOnly && "ring-1"
				} ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`,
			  };
	
			  return (
				<div className="mt-0" key={fieldName}>
				  <label
					htmlFor={fieldName}
					className="block text-sm font-medium leading-6 text-gray-900"
				  >
					{label}:
				  </label>
				  <div>
					{Field === "input" ? (
					  field.type === "mixed" ? (
						<Dropzone onDrop={handleFileUpload}>
						  {({ getRootProps, getInputProps }) => (
							<div className="mt-1">
							  <div
								{...getRootProps()}
								className="bg-white cursor-pointer rounded-md py-2 px-3 border border-gray-300 flex justify-center items-center"
							  >
								<input {...getInputProps()} />
								<span className="text-sm text-gray-700">
								  {formValues[fieldName]
									? `Selected file: ${formValues[fieldName].name}`
									: "Click or drag file to this area to upload"}
								</span>
							  </div>
							  {formErrors?.[fieldName] && (
								<small className="text-red-500">
								  {formErrors?.[fieldName] as string}
								</small>
							  )}
							</div>
						  )}
						</Dropzone>
					  ) : (
						<Field {...FieldProps} />
					  )
					) : Field == "textArea" ? (
					  <Field {...FieldProps}>{formValues[fieldName]}</Field>
					) : (
					  <></>
					)}
				  </div>
				  {formErrors?.[fieldName] && (
					<small className="text-red-500">
					  {formErrors?.[fieldName] as string}
					</small>
				  )}
				</div>
			  );
			})}
		  </div>
		</form>
	  );
};

export default ProfileForm;
