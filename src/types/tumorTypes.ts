export interface BoundingBox {
  x: number;      // percentage from left
  y: number;      // percentage from top
  width: number;  // percentage of image width
  height: number; // percentage of image height
}

export interface TumorClassification {
  classification: string; // 'Glioma', 'Meningioma', 'Pituitary', 'Normal'
  confidence: number;     // 0-100 percentage
  boundingBox: BoundingBox | null;
  timestamp: string;      // ISO timestamp
}

// In a real implementation, you might add more types:
// - ModelConfig
// - DetectionThresholds
// - ClassLabels
// - etc.