# Taller Cypress
Se implementó el test para el metodo que elimina un elemento de la lista de TODOs.
Para esto se incluyen dos items y se borra 1. En primer lugar se verifica que efectivamente el item ya no está en la lista y luego se corrobora que no se hayan borrado todos los elementos, sino solo el indicado, para lo cual se verifica que el otro item agregado siga en la lista.
La implementación se encuentra en el archivo 'todo.spec.js'