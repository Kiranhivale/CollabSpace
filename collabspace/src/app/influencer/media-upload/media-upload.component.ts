import { Component, OnInit } from '@angular/core';
interface MediaFile {
  id: string;
  name: string;
  type: 'image' | 'video';
  url: string;
  uploadDate: Date;
  size: string;
}
@Component({
  selector: 'app-media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.css']
})
export class MediaUploadComponent {
  uploadedFiles: MediaFile[] = [];
  dragActive = false;

  ngOnInit() {
    this.loadExistingMedia();
  }

  loadExistingMedia() {
    // Simulate existing media
    this.uploadedFiles = [
      {
        id: '1',
        name: 'fashion-shoot-1.jpg',
        type: 'image',
        url: '/assets/sample-image.jpg',
        uploadDate: new Date('2024-01-15'),
        size: '2.4 MB'
      },
      {
        id: '2',
        name: 'lifestyle-video.mp4',
        type: 'video',
        url: '/assets/sample-video.mp4',
        uploadDate: new Date('2024-01-10'),
        size: '15.7 MB'
      }
    ];
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragActive = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dragActive = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragActive = false;
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(files);
    }
  }

  onFileSelect(event: any) {
    const files = event.target.files;
    if (files) {
      this.handleFiles(files);
    }
  }

  handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (this.isValidFile(file)) {
        this.uploadFile(file);
      }
    }
  }

  isValidFile(file: File): boolean {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/avi'];
    const maxSize = 50 * 1024 * 1024; // 50MB
    
    if (!validTypes.includes(file.type)) {
      alert('Invalid file type. Please upload images or videos only.');
      return false;
    }
    
    if (file.size > maxSize) {
      alert('File size too large. Maximum size is 50MB.');
      return false;
    }
    
    return true;
  }

  uploadFile(file: File) {
    // Simulate file upload
    const reader = new FileReader();
    reader.onload = (e) => {
      const newFile: MediaFile = {
        id: Date.now().toString(),
        name: file.name,
        type: file.type.startsWith('image') ? 'image' : 'video',
        url: e.target?.result as string,
        uploadDate: new Date(),
        size: this.formatFileSize(file.size)
      };
      this.uploadedFiles.unshift(newFile);
    };
    reader.readAsDataURL(file);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  deleteFile(fileId: string) {
    this.uploadedFiles = this.uploadedFiles.filter(file => file.id !== fileId);
  }
}
