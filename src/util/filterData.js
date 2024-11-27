import { useAPI } from "../hooks/useAPI"

const filterData = (filter) => {
    const {data} = useAPI();

   return  filter
    ? data.filter(data => (((((data.address.city).toLowerCase().replace(/ +/g, "").includes(filter)))) || (((data.address.city).replace(/ +/g, "").includes(filter)) ) || ((data.address.city).includes(filter)) || (((data.address.city).toLowerCase().includes(filter)) ) || (((data.address.city).toUpperCase().includes(filter)) )))
    : data ;

}

export default filterData