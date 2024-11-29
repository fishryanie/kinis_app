import com.mrousavy.camera.frameprocessors.Frame
import com.mrousavy.camera.frameprocessors.FrameProcessorPlugin
import com.mrousavy.camera.frameprocessors.VisionCameraProxy

class LandmarksHand(proxy: VisionCameraProxy, options: Map<String, Any>?): FrameProcessorPlugin() {
  init {
    Log.d("LandmarksHand", "LandmarksHand initialized with options: " + options?.toString())
  }
  override fun callback(frame: Frame, arguments: Map<String, Any>?): Any? {
    if (params == null) {
      return null
    }
    // code goes here
    return null
  }
}


