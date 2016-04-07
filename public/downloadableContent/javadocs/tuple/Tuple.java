/**
 * This class creates an ordered array of int elements which
 * can be updated, added together, and described in multiple ways.
 */
public class Tuple {
	private int[] totals;

  /**
   * A constructor which takes in an array of values and
   * builds a new Tuple from this array.
   * @param quantities An int array specifying the quantities of each
   *        coin in this Tuple
   */
	public Tuple(int[] quantities) {
	  totals = new int[values.length];
	  for(int i = 0; i < values.length; i++) {
	  	totals[i] = values[i];
	  }
	}

	/**
	 * A constructor which takes in an int and creates
	 * a zeroed out Tuple with the length specified.
	 * @param numberOfDenominations The length of this Tuple
	 */
	public Tuple(int numberOfDenominations) {
	  totals = new int[coins];
	  for(int i = 0; i < coins; i++) {
	    totals[i] = 0;
	  }
	}

	/**
	 * Takes in an index and returns the value in the
	 * Tuple at that index.
	 * @param index The index to look up
	 * @return The integer in the index specified
	 */
	public int getElement(int index) {
		return this.totals[index];
	}


	/**
	 * Takes in an index and a value and sets the value in the
	 * Tuple at that index.
	 * @param index The index to change
	 * @param value The value to store
	 */
	public void setElement(int index, int value) {
		this.totals[index] = value;
	}

  /**
   * Takes in a Tuple and adds that Tuple to this tuple.
   * Note that this alters the tuple the method is called from.
   * @param t A tuple to add to this tuple
   */
	public void add(Tuple t) {
	  for(int i = 0; i < this.totals.length; i++) {
	    this.totals[i] += t.totals[i];
	  }
	}

  /**
   * Returns the total number of coins in this Tuple
   * @return The number of coins in this Tuple.
   */
	public int numberOfCoins() {
	  int coins = 0;
	  for(int i = 0; i < this.totals.length; i++) {
	    coins += this.totals[i];
	  }
	  return coins;
	}

  /**
   * Returns the String representation of this Tuple in the
   * form <a, b, c>
   * @return The String representation of this Tuple
   */
	public String toString() {
		String s = "[";
		for(int i = 0; i < this.totals.length; i++) {
			if(i == 0) {
				s += this.totals[i];
			} else {
			  s += ", " + this.totals[i];
		  }
		}
		return s + "]";
	}
}