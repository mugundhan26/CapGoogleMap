
import UIKit

protocol MapMarkerDelegate: AnyObject {
    func didTapInfoButton(data: NSDictionary)
}

class MapMarkerWindow: UIView {

    @IBOutlet weak var htmlInfo: UITextView!
    
    weak var delegate: MapMarkerDelegate?
    var spotData: NSDictionary?

    
    class func instanceFromNib() -> UIView {
        return UINib(nibName: "MapMarkerWindowView", bundle: nil).instantiate(withOwner: self, options: nil).first as! UIView
    }
}
