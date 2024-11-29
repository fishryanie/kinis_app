import VisionCamera
import MediaPipeTasksVision

@objc(LandmarksHandPlugin)
public class LandmarksHandPlugin: FrameProcessorPlugin {
  private var handLandmarker: HandLandmarker?
  private var frameCounter = 0 // Biến đếm số khung hình
  public override init(proxy: VisionCameraProxyHolder, options: [AnyHashable: Any]! = [:]) {
    super.init(proxy: proxy, options: options)

    // Khởi tạo HandLandmarker chỉ một lần
    let modelPath = Bundle.main.path(forResource: "landmarkerHand", ofType: "task")
    let handOptions = HandLandmarkerOptions()
    handOptions.baseOptions.modelAssetPath = "landmarkerHand.task"
    handOptions.runningMode = .video
    handOptions.minHandDetectionConfidence = 0.5
    handOptions.minHandPresenceConfidence = 0.5
    handOptions.minTrackingConfidence = 0.5
    handOptions.numHands = 1
    
    do {
      handLandmarker = try HandLandmarker(options: handOptions)
    } catch {
      print("Error initializing hand landmarker: \(error)")
    }
  }

  public override func callback(_ frame: Frame, withArguments arguments: [AnyHashable: Any]?) -> Any? {    
    guard let handLandmarker = handLandmarker else {
      return nil
    }

    let buffer = frame.buffer

    do {
      let image = try MPImage(sampleBuffer: buffer)
      let result = try handLandmarker.detect(videoFrame: image, timestampInMilliseconds: Int(frame.timestamp))
      
      var landmarks = [] as Array
      
      for hand in result.landmarks {
        var marks = [] as Array
        
        for handmark in hand {
          marks.append([
            "x": handmark.x,
            "y": handmark.y
          ])
        }
        
        landmarks.append(marks)
      }
      
      return landmarks
    } catch {
      return nil
    }
  }
}



