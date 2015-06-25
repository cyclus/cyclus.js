

# Cyclus Schema modifications

## Namespace

There's currently no way to differentiate between different schema versions.

### Proposed solutuon

Add a cyclus namespace to differentiate between different schema versions

     <grammar xmlns="http://relaxng.org/ns/structure/1.0"
              xmlns:a="http://relaxng.org/ns/compatibility/annotations/1.0"
              ns="http://www.fuelcycle.org/ns/1.0"
              datatypeLibrary="http://www.w3.org/2001/XMLSchema-datatypes"> 
              
## Libraries section

There is a need to be able to include existing definitions of archetypes, commodities, facilities and 
other agents into a simulation.xml file. It will be nice to have a collections of such libraries that 
the user import from.

It might be important to differentiate between entities that are used in simulations specification and 
entities that where imported but are not required.

### Proposed solution

Define a library as a file with multiple definitions of these entities.
    
Here is the rng definition of a lib
    
    <define name="lib">
      <element name="lib">
        <zeroOrMore>
          <choice>
            <ref name="commodity"/>
            <ref name="recipe"/>
            <ref name="archetype"/>
            <ref name="facility"/>
            <ref name="institution"/>
            <ref name="region"/>

            <ref name="lib"/>
          </choice>
        </zeroOrMore>
      </element>
    </define>

A library is then an rng file with a `<lib>` tag and the cyclus namespace

    <lib xmlns="http://www.fuelcycle.org/ns/1.0">
        <archetype id="arch.reactor">
        ....
        </archetype>
        
        <archetype id="arch.enrichment">
        </archetype>
        
        <recipe id="rcp.spent_uox">
        ...
        </recipe>
        
The simulation schema will now have an additional`<libs>` section at the start 
    
    <element name="simulation">
      <optional>
        <element name="libs">
          <zeroOrMore> <ref name="lib"/> </zeroOrMore>
        </element>
      </optional>
     
      <ref name="spec"/>
      
      ...
    </element>
     
## Consistent naming and referencing entities

The current schema does not support a direct way to verify references to other agents, commodities and recipes. For example, a facility using a recipe R