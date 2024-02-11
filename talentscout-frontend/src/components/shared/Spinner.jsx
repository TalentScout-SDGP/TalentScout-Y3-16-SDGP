import spinner from '../../../public/spinner.gif';

function Spinner() {
    return (
        <div className="w-100 my-20 select-none">
            <img src={spinner} width={180} className='select-none text-center mx-auto' alt='Loading'></img>
        </div>
    );
}

export default Spinner;