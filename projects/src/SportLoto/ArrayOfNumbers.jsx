export default function ArrayOfNumbers() {

    let getArray = (numbers) => {
        let result = [];
        for (let i = 1; i <= numbers; i++) {
            result.push(i);
        }
        return result;
    };
    console.log(getArray(36))
    return <div>
        {/*{getArray(36)}*/}
    </div>
}