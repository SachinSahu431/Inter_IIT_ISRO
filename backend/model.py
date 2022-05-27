import numpy as np
import json
import codecs
import matplotlib.pyplot as plt
from astropy.io import fits
from scipy.interpolate import make_interp_spline
from scipy.interpolate import interp1d
from scipy.signal import find_peaks, peak_prominences


def fun(a):
    b = a.copy()
    for i in range(a.size):
        if i != 0 and i != a.size-1:
            b[i] = (a[i-1]+a[i+1]+a[i])/3
        else:
            b[i] = a[i]
    return b


def riseTime(Data,d_new, peaks_dist, peaks_dist_unprocess):
    rise_time = []
    left = []
    leftval = []
    for i in peaks_dist:
        j = i
        while d_new[j]-d_new[j-1] >= -0.5:
            j -= 1
            if j == 0:
                break
        left.append(j)
    for a in range(peaks_dist.size):
        rise_time.append(
            abs(Data['TIME'][peaks_dist[a]]-Data['TIME'][left[a]]))
        leftval.append(
            float(Data['TIME'][left[a]])        
        )
    
    # plt.plot(Data['Time'],d_new)
    # plt.plot(Data['Time'][peaks_dist], d_new[peaks_dist], "x")
    # plt.plot(Data['Time'][left], d_new[left], "o")
    # plt.savefig('foo.jpg')
    # for i in range(len(left)):
    #   left[i] = float(Data['TIME'][i])

    return rise_time, leftval


def decayTime(Data,d_new, peaks_dist, peaks_dist_unprocess):
    decay_time = []
    right = []
    rightval = []
    for i in peaks_dist:
        j = i
        while d_new[j]-d_new[j+1] >= -0.5:
            j += 1
            if j == Data['RATE'].size-1:
                break
        right.append(j)
    for a in range(peaks_dist.size):
      decay_time.append(abs(Data['TIME'][peaks_dist[a]]-Data['TIME'][right[a]]))
      rightval.append(Data['TIME'][right[a]])

    for i in range(len(right)) :
      right[i] = float(Data['TIME'][i])
    return decay_time, rightval

def contourInfo(Data, d_new, peaks_dist, peaks_dist_unprocess):
  prominences, _, _ = peak_prominences(Data['RATE'], peaks_dist_unprocess)
  contour_heights = Data['RATE'][peaks_dist_unprocess] - prominences

  prominences_prime, _, _ = peak_prominences(d_new, peaks_dist)
  contour_heights_prime = d_new[peaks_dist] - prominences_prime

  return prominences, contour_heights, prominences_prime, contour_heights_prime



def timesofpeaks(Data,d_new, peaks_dist, peaks_dist_unprocess):
    time_of_occurance = Data['TIME'][peaks_dist_unprocess]
    time_corresponding_peak_flux = Data['RATE'][peaks_dist_unprocess]
    max_peak_flux = max(Data['RATE'][peaks_dist_unprocess])
    average_peak_flux = np.average(Data['RATE'])
    rise_time, left = riseTime(Data,d_new, peaks_dist , peaks_dist_unprocess)
    decay_time, right = decayTime(Data,d_new, peaks_dist , peaks_dist_unprocess)
    return time_of_occurance, time_corresponding_peak_flux, max_peak_flux, average_peak_flux, rise_time,left, decay_time, right



def findpeaks(Data, d_new):
    all_peaks, _ = find_peaks(Data['RATE'])
    # Here 350 is approx backgroung flux
    peaks_dist, _ = find_peaks(d_new, height=350, distance=500)
    peaks_dist_unprocess, _ = find_peaks(
        Data['RATE'], height=350, distance=500)
    # print(peaks_dist)
    # print(peaks_dist_unprocess)
    return peaks_dist, peaks_dist_unprocess


def returnable(extension):
    data = fits.open('icdata' + extension)

    Data = data[1].data

    d_new = fun(Data['RATE'].flatten())
    for i in range(100):
        d_new = fun(d_new)
    # print(d_new)

    peaks_dist, peaks_dist_unprocess = findpeaks(Data, d_new)
    time_of_occurance, time_corresponding_peak_flux, max_peak_flux, average_peak_flux, rise_time,left, decay_time,right = timesofpeaks(Data,d_new, peaks_dist, peaks_dist_unprocess)
    prominences, contour_heights, prominences_prime, contour_heights_prime = contourInfo(Data, d_new, peaks_dist, peaks_dist_unprocess)
    xitems = Data['Time'].tolist()
    yitems = d_new.tolist()
    print(type(left))
    print(type(left[0]))
    returndict = {
        "x": xitems,  
        "y": yitems,
        "time_of_occurances" : time_of_occurance.tolist(),
        "time_corresponding_peak_flux" : time_corresponding_peak_flux.tolist(),
        "max_peak_flux" : str(max_peak_flux),
        "average_peak_flux" : str(average_peak_flux),
        "rise_time" : rise_time,
        "left" : left,
        "decay_time" : decay_time,
        "right" : right,
        "prominences" : prominences.tolist(),
        "contour_heights" : contour_heights.tolist(),
        "prominences_prime" : prominences_prime.tolist(),
        "contour_heights_prime" : contour_heights_prime.tolist()
        }


    # print(returndict)
    return returndict

# for testing purposes
if __name__ == "__main__":
    returnable()
    pass
    data = fits.open('icdata.lc')

    Data = data[1].data

    d_new = fun(Data['RATE'].flatten())
    for i in range(100):
        d_new = fun(d_new)

    findpeaks(Data, d_new)

    # plt.plot(Data['Time'],d_new)
    # plt.show()
