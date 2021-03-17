package com.tts.MapsAPI.Model;

import lombok.Data;

import java.util.List;

@Data
public class GeocodingResponse {
  private List<Geocoding> results;
}
