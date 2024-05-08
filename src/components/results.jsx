export default function Result ({ resultArray }) {
    const [mResult, mmResult, umResult] = resultArray
    return (
        <>
            <p>The results are : </p>
            <div>
                <span>M</span>
                <span>mM</span>
                <span>μM</span>


            </div>
        </>
    )
}