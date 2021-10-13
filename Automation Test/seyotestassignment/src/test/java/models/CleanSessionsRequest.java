package models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CleanSessionsRequest {
    @JsonProperty("roomSize")
    private List<Integer> roomSize = null;
    @JsonProperty("coords")
    private List<Integer> coords = null;
    @JsonProperty("patches")
    private List<List<Integer>> patches = null;
    @JsonProperty("instructions")
    private String instructions;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    public CleanSessionsRequest(List<Integer> roomSize, List<Integer> coords, List<List<Integer>> patches,String instructions){
        this.roomSize = roomSize;
        this.coords = coords;
        this.patches = patches;
        this.instructions = instructions;
    }

}
