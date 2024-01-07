import { Button } from 'antd';

const PNG_FILE = 'http://localhost:3000/gudduraj.pdf';

const DownloadFile = (url) => {
  const fileName = url.split('/').pop(); // Move the fileName inside the function
  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.setAttribute('download', fileName);
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
};

const Download = () => {
  return (
    <div>
      <Button
        onClick={() => {
          DownloadFile(PNG_FILE);
        }}
      >
        Download File
      </Button>
    </div>
  );
};

export default Download;
