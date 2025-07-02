// src/components/DownloadSyllabusButton.tsx

'use client';

import Button from './Button';

interface DownloadSyllabusButtonProps {
  fileUrl: string;
  fileName?: string;
}

const DownloadSyllabusButton: React.FC<DownloadSyllabusButtonProps> = ({
  fileUrl,
  fileName = 'syllabus'
}) => {
  const handleDownload = async () => {
    try {
      // Try to fetch the file and create a blob
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create and trigger download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <Button
      variant="primary"
      className="w-fit"
      onClick={handleDownload}
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path>
      </svg>
      Download Syllabus
    </Button>
  );
};

export default DownloadSyllabusButton;