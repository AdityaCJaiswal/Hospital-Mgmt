## Doctor

// Route to get all doctors  
get /doctor/

// Route to get doctor by ID  
get /doctor/:id/

// Route to create a new doctor  
post /doctor/

// Route to update a doctor by ID  
put /doctor/:id/

// Route to delete a doctor by ID  
delete /doctor/:id/


## Receptionist

// Route to get all receptionist  
get /receptionist/

// Route to get receptionist by ID  
get /receptionist/:id/

// Route to create a new receptionist  
post /receptionist/

// Route to update a receptionist by ID  
put /receptionist/:id/

// Route to delete a receptionist by ID  
delete /receptionist/:id/

## patient

// Route to get all patient  
get /patient/

// Route to get patient by ID  
get /patient/:id/

// Route to create a new patient  
post /patient/

// Route to update a patient by ID  
put /patient/:id/

// Route to delete a patient by ID  
delete /patient/:id/

## Allotment

// Route to get all allotment  
get /allotment/

// Route to get allotment by ID  
get /allotment/:id/

// Receptionist creates allotment (optional, specific doctor)
post allotment/receptionist/

// Patient books appointment (random available doctor)
post allotment/patient/

// Route to update an allotment by ID  
put /allotment/:id/

// Route to delete an allotment by ID  
delete /allotment/:id/
