export default function RandomNumbers() {
    let getArray = (numbers) => {
        let result = [];
        for (let i = 1; i <= numbers; i++) {
            result.push(i);
        }
        return result;
    };

    return <div>
        {getArray(36)}

    </div>
}