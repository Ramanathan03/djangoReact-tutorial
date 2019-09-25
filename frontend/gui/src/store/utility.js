export const updateobject = (oldObject, updateProperties) =>{
	return {
		...oldObject,
		...updateProperties
	}
} 