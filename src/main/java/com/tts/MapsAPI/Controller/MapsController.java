package com.tts.MapsAPI.Controller;

import com.tts.MapsAPI.Model.Location;
import com.tts.MapsAPI.Service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MapsController {

  @Autowired
  private MapService mapService;

  @GetMapping(value = "/home")//@GetMapping("/")
  public String getDefaultMap(Model model){
    model.addAttribute(new Location());
    return "index";
  }

//  @GetMapping(value = "/home")
//    public String getDefaultMap() {
//    Location location = new Location();
//    location.setCity("Dallas");
//    location.setState("Texas");
//    mapService.addCoordinates(location);
//    System.out.println(location);
//    return "index";
//  }

  @PostMapping("/home")
  public String getMapForLocation(Location location, Model model) {
    mapService.addCoordinates(location);
    model.addAttribute(location);
    return "index";
  }
}
