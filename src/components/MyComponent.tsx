import {useApi} from "../hook/useApi.ts";
import {Pet, PetApiFactory} from "../../generated";
import {Suspense, useCallback, useEffect, useState} from "react";

export const MyComponent = () => {

    const [pet, setPet] = useState<Pet>();
    const [{data: _petResult}, getPet] = useApi(
        {
            apiFactory: PetApiFactory,
            methodName: 'getPetById',
        },
        {
            manual: true,
        }
    )
    const fetchPetById = useCallback(async (id: number) => {
        return await getPet(id);
    }, [])

    useEffect(() => {
        fetchPetById(2).then(result => setPet(result.data))
    }, [fetchPetById]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {pet?.name}
        </Suspense>
    )
}
