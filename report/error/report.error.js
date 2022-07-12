class ReportError
{
    constructor(e)
    {
        this.#myLog(e);
    }

    #myLog(e)
    {
        console.error(e.name);
        console.error(e.message);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
    }
}
