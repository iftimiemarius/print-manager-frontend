import React, {useState, useEffect} from 'react';


function CreateOptions(printers) {
  return printers.map(v => (
    <option value={v.id}>{v.name}</option>
  ))
}



function Print() {
  const [allPrinters, setAllPrinters] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  useEffect(() => {
    refreshPrinters();
  }, []);

  const refreshPrinters = (event) => {
    fetch("http://localhost:8000/")
      .then(response => response.json())
      .then(data => {setAllPrinters(data)})
      .catch(error => {
        console.error(error);
        setAllPrinters([])
      });
  }


  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
    let data = new FormData()
    data.append("file", selectedFile);

    fetch("http://localhost:8000/print_file", {
      method: "POST",
      body: data
    });
	};

  return (
    <div className="App">

      <p>Hi there</p>
      <button onClick={refreshPrinters}>Refresh Printers</button>


      {allPrinters.length > 0
        ?
        <div>
          <p>Please choose a printer from the network</p>

          <select>
            {CreateOptions(allPrinters)}
          </select>

          <p>Please upload a printable file below.</p>

          <div className="grid-container">
            <div>
              <input type="file" name="file" onChange={changeHandler} />
            </div>

            {isFilePicked &&
              <div>
                <button onClick={handleSubmission}>Send to Printer</button>
              </div>
            }
          </div>
        </div>
        :
        <div>
          <p>Currently there are no available printers</p>
        </div>
      }
    </div>
  );
}

export default Print;
