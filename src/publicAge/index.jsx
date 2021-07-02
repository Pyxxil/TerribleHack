import React, {useState} from 'react';

const publicAge = () => {
    const [age, setAge] = useState('');

    return (
    <form>What is your age?</form>
    );
}
export default publicAge;