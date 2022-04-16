export default function DiffArray(){

    let diffArr = (arr1, arr2) => {
        let result = [];
        for (let elem of arr1) {
            if (inArray(elem, arr2)) {
                result.push(elem);
            }
        }
        return result;
    };
    let inArray = (elem, arr) => {
        return arr.indexOf(elem) !== -1;
    };

    return <div>
        {diffArr()}
    </div>
}