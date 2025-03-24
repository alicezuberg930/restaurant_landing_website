import numpy as np
import matplotlib.pyplot as plt

years = [2006 + x for x in range(16)]
weights = [40, 42, 44, 46, 49, 51, 54, 56, 60, 61, 62, 64, 65, 67, 68, 71]

plt.plot(years, weights, "p--")
plt.show()