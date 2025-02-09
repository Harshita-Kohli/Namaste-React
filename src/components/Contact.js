const Contact = () => {
    return <div>
        <h1 className="font-bold p-4 m-4 text-3xl">Contact Us Page</h1>
        <form>
            <input type = "text" className="p-2 m-2 border border-black" placeholder = "name"></input>
            <input type = "text" className="p-2 m-2 border border-black" placeholder = "message"></input>
            <button className="p-2 m-2 border border-black bg-slate-300 rounded-lg">Submit</button>
        </form>

    </div>
}
export default Contact;